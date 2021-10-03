import express from "express";
import { PrismaClient, VideoLikeDistinctFieldEnum } from ".prisma/client";
import { protect } from "../middleware/authorization";
import { getVideoViews } from './video';

const prisma = new PrismaClient();


function getUserRoutes() {
  const router = express.Router();

  router.get('/liked-videos', protect, getLikedVideos);
  router.get('/history', protect, getHistory);
  router.get('/:userId/toggle-subscribe', protect, toggleSubscribe);
  router.get('/subscriptions', protect, getFeed);

  return router;
}

async function getVideos(model, req, res) {
  const videoRelations = await model.findMany({
    where: {
      userId: req.user.id
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const videoIds = videoRelations.map(videoLike => videoLike.videoId);

  let videos = await prisma.video.findMany({
    where: {
      id: {
        in: videoIds
      }
    }, include: {
      user: true
    }
  });

  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);

  res.status(200).json({ videos });
}

async function getLikedVideos(req, res) {
  await getVideos(prisma.videoLike, req, res);
  
}

async function getHistory(req, res) {
  await getVideos(prisma.view, req, res);
}

async function toggleSubscribe(req, res, next) {
  if (req.user.id === req.params.userId) {
    return next({
      message: "You cannot subscribe to your own channel",
      statusCode: 400
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: req.params.userId
    }
  });

  if (!user) {
    return next({
      message: `No user found with id: "${req.params.userId}"`,
      statusCode: 404
    });
  }

  const isSubscribed = await prisma.subscription.findFirst({
    where: {
      subscriberId: {
        equals: req.user.id
      },
      subscribedToId: {
        equals: req.params.userId
      }
    }
  });

  if (isSubscribed) {
    await prisma.subscription.delete({
      where: {
        id: isSubscribed.id
      }
    });
  } else {
    await prisma.subscription.create({
      data: {
        subscriber: {
          connect: {
            id: req.user.id
          }
        },
        subscribedTo: {
          connect: {
            id: req.params.userId
          }
        }
      }
    });
  }

  res.status(200).json({});
}

async function getFeed(req, res) {
  const subscribedTo = await prisma.subscription.findMany({
    where: {
      subscriberId: {
        equals: req.user.id
      }
    }
  });

  const subscriptions = subscribedTo.map(sub => sub.subscribedToId);

  const feed = await prisma.video.findMany({
    where: {
      userId: {
        in: subscriptions
      }
    },
    include: {
      user: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  if (!feed.length) {
    return res.status(200).json({ feed });
  }

  const feedVideos = await getVideoViews(feed);

  res.status(200).json({ feed: feedVideos });
}

async function searchUser(req, res, next) {}

async function getRecommendedChannels(req, res) {}

async function getProfile(req, res, next) {}

async function editUser(req, res) {}

export { getUserRoutes };
