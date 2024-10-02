import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCardDTO } from './dto/create-car.dto';
import { UpdateCardDTO } from './dto/update-car.dto copy';


@Injectable()
export class CarsService {
    private cars :Car[] =[ 
        {   
            id:uuid(),
            brand: 'Toyota',
            model : 'Corolla'
        },
        {
            id:uuid(),
            brand: 'Honda',
            model : 'Civic'
        },
        {
            id:uuid(),
            brand: 'Jeep',
            model : 'Cherokee'  
        }   
]



public findAll(){
    return this.cars;
}

findCarById(id: string) {
    const car =this.cars.find(car => car.id == id);
    console.log("🚀 ~ CarsService ~ findCarById ~  this.cars.find(car => car.id === id);:",  this.cars.find(car => car.id == id))

    if(!car) throw new NotFoundException(`Car with id '${id}' not found.'`)
    return car

  }

create(createCardDTO: CreateCardDTO){

    // const newCar = createCardDTO;
    // newCar.id = uuid();
    // this.cars.push(newCar);

    const newCar: Car = {
        id: uuid(),
       ...createCardDTO
    }
    this.cars.push(newCar);

    return newCar;
}

update( id:string, updateCardDTO: UpdateCardDTO){
    let carDB = this.findCarById(id);
    
    if(updateCardDTO.id && updateCardDTO.id !==id)
        throw new NotFoundException(`Car with id '${id}' not found.'`)


    this.cars = this.cars.map(car =>{
        if(car.id===id){
            carDB={...carDB,...updateCardDTO,id}
            return carDB;
        }
        console.log("🚀 ~ CarsService ~ update ~ carDB:", carDB)
        return car; 
    })

    return carDB;

}

delete(id: string){
    const car = this.findCarById(id);
    this.cars = this.cars.filter(car => car.id !== id);
}

}
