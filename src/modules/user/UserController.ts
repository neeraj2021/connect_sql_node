import "reflect-metadata";
import { getAllUser, getUserByCustomerId } from "./userFunction";
import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from "routing-controllers";

@Controller()
export class UserController {
  @Get("/users")
  async getAll() {
    const data = await getAllUser();
    return data;
  }

  @Get("/users/:id")
  async getOne(@Param("id") id: number) {
    const data = await getUserByCustomerId(id);
    return data;
  }

  @Post("/users")
  post(@Body() user: any) {
    return "Saving user...";
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
