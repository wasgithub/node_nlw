import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsaap,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    // const trx = await knex.transaction();
    const point = {
      image: 'image fake',
      name,
      email,
      whatsaap,
      latitude,
      longitude,
      city,
      uf,
    };

    const insertedIds = await knex('points').insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: Number) => {
      return {
        item_id,
        point_id,
      };
    });

    await knex('point_items').insert(pointItems);

    return response.status(200).json({ ...point, point_id });
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    console.log(id);

    const point = await knex('points').where('id', id).first();

    if (!point) {
      return response.status(400).json({ message: 'Point not found.' });
    }

    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title');

    return response.status(200).json({ point, items });
  }
}

export default PointsController;
