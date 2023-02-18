import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AppUser, AppUserDocument } from './app.models';

// setup our service to work with and communicate with the database

@Injectable()
export class AppService {
  constructor(
    @InjectModel('appuser')
    private readonly appUserModel: Model<AppUserDocument>,
  ) {}

  // creating a app user
  async creatingAppUser(user: AppUser): Promise<AppUser> {
    const newAppUser = new this.appUserModel(user);

    return newAppUser.save();
  }

  // reading all App Users in appuser collection(aka table)
  readAppUser() {
    return this.appUserModel
      .find()
      .then((appUser) => appUser)
      .catch((err) => console.log(err));
  }

  // update the data
  async updateAppUser(id, data): Promise<AppUser> {
    // new here helps us return the new updated data as response
    return this.appUserModel.findByIdAndUpdate(id, data, { new: true });
  }

  // Deletin of daa from the appuser collection
  async deleteAppUser(id: string) {
    return this.appUserModel.findByIdAndRemove(id);
  }
}
