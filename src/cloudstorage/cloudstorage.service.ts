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

  async deleteFile(url: String) {
      return new Promise((resolv) => {
        const cloudStorageHost = `${configuration.google.cloud_storage.host}${configuration.google.cloud_storage.buckets.portadas_recetas}/`;

        if(url.includes(cloudStorageHost)) {
          const relativeUrl = url.replace(cloudStorageHost, '');
          // Delete field
          const resp = bucket.file(relativeUrl).delete().then(data => {
            console.log(`Deleted image: ${url}`);
            resolv(resp);
          }).catch(error => {
            resolv(error);
          });
        } else {
          // Foreign image
          resolv(true);
        }
      })
  }

  async uploadPresciptionImage(id: string, image: Express.Multer.File): Promise<string | null> {
    return new Promise((resol) => {
      try {
        const cloudStorageHost = configuration.google.cloud_storage.host;
        pathReceta += id;
        let imageExtencion = path.extname(image.originalname);
        let imageName = `porta${imageExtencion}`;

        const blob = bucket.file(`${pathReceta}/${imageName}`);
        const blobStream = blob.createWriteStream({
          resumable: false
        }).end(image.buffer);
    
        blobStream.on("finish", async () => {
          const url = `${cloudStorageHost}${bucket.name}/${blob.name}`;
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
