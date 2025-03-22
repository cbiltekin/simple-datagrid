import express from "express";
import ElectricCarModel from "../models/gridModel";

export const createCar = async (req: express.Request, res: express.Response) => {};
export const getCars = async (req: express.Request, res: express.Response) => {
    try {
        const cars = await ElectricCarModel.find();
        if (cars.length <= 0){
            res.status(404).send({message: "No cars found!"});
        } else {
            res.status(200).send(cars);
        }
    } catch (error) {
        res.status(500).send({message: "Error fetching cars!"});
    }
};
export const getCar = async (req: express.Request, res: express.Response) => {};
export const deleteCar = async (req: express.Request, res: express.Response) => {};