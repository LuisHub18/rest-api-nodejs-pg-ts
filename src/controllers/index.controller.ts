import { Request, Response } from 'express';
import {pool} from '../database';
import { QueryResult } from 'pg';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Unexpected error');
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Unexpected error');
    }
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password} = req.body;
        const response: QueryResult = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]
        );
        return res.status(200).json({
            message: 'User created successfully',
            body: {
                user: {
                    name, 
                    email
                }
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Unexpected error');
    }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { name, email, password} = req.body;
        const response: QueryResult = await pool.query(
            'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [name, email, password, id]
        );
        return res.status(200).json(`User ${id} updated successfully`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Unexpected error');
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const response: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return res.status(200).json(`User ${id} deleted successfully`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Unexpected error');
    }
}