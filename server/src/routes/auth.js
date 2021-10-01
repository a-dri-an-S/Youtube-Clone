import { PrismaClient } from '@prisma/client';
import express from "express";
import jwt from 'jsonwebtoken';
import { protect } from '../middleware/authorization';


const prisma = new PrismaClient();

function getAuthRoutes() {
  const router = express.Router();

  router.post('/google-login', googleLogin);
  router.get('/me', protect, me);

  return router;
}

// All controllers/utility functions here
async function googleLogin(req, res) {
  const { username, email } = req.body

  let user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    await prisma.user.create({
      data: {
        username,
        email
      }
    })
  }

  const tokenPayload = { id: user.id };
  const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  res.cookie('token', token, { httpOnly: true })
  res.status(200).send(token);
}

async function me(req, res) {}

function signout(req, res) {}

export { getAuthRoutes };
