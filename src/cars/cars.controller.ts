import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDTO,UpdateCardDTO } from './dto/index';

@Controller('cars')
// @UsePipes(ValidationPipe)

export class CarsController {

 constructor(
    private carsSvr : CarsService,
 ){}
 
    @Get()
    getAllCars(){
        return this.carsSvr.findAll();
    }

    @Get(':id')
    getCardId(@Param('id', ParseUUIDPipe) id: string){
        return this.carsSvr.findCarById(id);
    }

    @Post()
    createCar(
        @Body() createCardDto: CreateCardDTO){
        return this.carsSvr.create(createCardDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id',ParseUUIDPipe) id:string,
        @Body() updateCardDTO: UpdateCardDTO)
        {
            
        return this.carsSvr.update(id,updateCardDTO)
    }

    @Delete(':id')
        deleteCar(@Param('id',ParseUUIDPipe) id: string){
            return this.carsSvr.delete(id);
    }


}
