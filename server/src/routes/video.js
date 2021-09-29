import express from "express";

function getVideoRoutes() {
  const router = express.Router();

  return router;
}

async function getRecommendedVideos(req, res) {}

async function getTrendingVideos(req, res) {}

async function searchVideos(req, res, next) {}

async function addVideo(req, res) {}

async function addComment(req, res, next) {}

async function deleteComment(req, res) {}

async function addVideoView(req, res, next) {}

async function likeVideo(req, res, next) {}

async function dislikeVideo(req, res, next) {}

async function getVideo(req, res, next) {}

async function deleteVideo(req, res) {}

export { getVideoRoutes };
