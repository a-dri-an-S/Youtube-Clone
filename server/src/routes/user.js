import express from "express";

function getUserRoutes() {
  const router = express.Router();

  return router;
}

async function getLikedVideos(req, res, next) {}

async function getHistory(req, res, next) {}

async function toggleSubscribe(req, res, next) {}

async function getFeed(req, res) {}

async function searchUser(req, res, next) {}

async function getRecommendedChannels(req, res) {}

async function getProfile(req, res, next) {}

async function editUser(req, res) {}

export { getUserRoutes };
