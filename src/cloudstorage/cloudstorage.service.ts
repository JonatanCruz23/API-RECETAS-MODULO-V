import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import * as path from 'path';
import configuration from 'src/config/configuration';

const storage = new Storage({ 
  credentials: JSON.parse(configuration.google.credentials)
});
const bucket = storage.bucket(configuration.google.cloud_storage.buckets.portadas_recetas);
let pathReceta = 'imagenes/receta/';

@Injectable()
export class CloudstorageService {

  async uploadPresciptionImage(id, image: Express.Multer.File): Promise<string | null> {
    return new Promise((resol, reject) => {
      try {
        pathReceta += id;
        let imageExtencion = path.extname(image.originalname);
        let imageName = `porta${imageExtencion}`;

        const blob = bucket.file(`${pathReceta}/${imageName}`);
        const blobStream = blob.createWriteStream({
          resumable: false
        }).end(image.buffer);
    
        blobStream.on("finish", async () => {
          const url = `https://storage.cloud.google.com/${bucket.name}/${blob.name}`;
          console.log(`New image uploaded: ${url}`);
          resol(url);
        });
    
        blobStream.on("error", (err) => {
          console.log(`Error to upload image: ${err}`);
          resol(null);
        });
      } catch (error) {
        resol(null);
      }
    });
  }
}
