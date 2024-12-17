
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const getAvaiabilityById = defineAction({
        accept: 'json',
        input: z.string(),
        handler: async (placeId) => {

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 3000);
            })

            const isAvailability = Math.random() < 0.5;//return true or false
            const spotAvailable = Math.floor(Math.random() * 10) + 1;
            let message = 'No hay espacios disponibles';

            if (isAvailability) {
                message = (spotAvailable > 1) ? `${spotAvailable} espacios disponibles` : `${spotAvailable} espacio disponible`;
            }

          return {
            id:placeId,
            isAvailability,
            spotAvailable,
            message
          };
          
        }
      });
