import express from 'express';
import {getUser,postUser} from '../Controller/aboutController.js'
export const routeUser = express.Router();


routeUser.get('/',getUser);
routeUser.post('/',postUser);
