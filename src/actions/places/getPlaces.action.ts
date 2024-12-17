
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { prisma } from '../../db';

export const getPlaces = defineAction({
        
        handler: async () => {

        try {
            
            const places = await prisma.place.findMany();

            return places;
        } catch (error) {
            throw new Error('Error al obtener los lugares');
        }
          
        }
      });
