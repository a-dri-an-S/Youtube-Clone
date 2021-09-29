import express from "express";
// A function to get the routes.
// All route definitions are in one place and we only need to export one thing
function getAuthRoutes() {
  const router = express.Router();


  // 'http://localhost:3001/api/v1/auth/current-user'
  router.get('/current-user', (req, res) => {
    res.status(200).json({
      user: {
        id: "1234",
        username: "test",
        email: "test@example.com"
      }
    })
  })

  return router;
}

// All controllers/utility functions here
async function googleLogin(req, res) {}

async function me(req, res) {}

function signout(req, res) {}

export { getAuthRoutes };
