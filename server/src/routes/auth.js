import express from "express";
// A function to get the routes.
// All route definitions are in one place and we only need to export one thing
function getAuthRoutes() {
  const router = express.Router();

  return router;
}

// All controllers/utility functions here
async function googleLogin(req, res) {}

async function me(req, res) {}

function signout(req, res) {}

export { getAuthRoutes };
