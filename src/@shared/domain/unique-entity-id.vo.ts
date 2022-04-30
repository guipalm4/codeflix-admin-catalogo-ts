import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from "uuid";
import InvalidUuidError from "../errors/invalid-uuid-error";

export class UniqueEntityId {
    private constructor(public readonly id?: string) {
        this.id = id
        this.validate();
    }
    static create(): UniqueEntityId {
        return new UniqueEntityId(uuidv4())
    }

    static from(aID: string) {
        return new UniqueEntityId(aID);
    }

    private validate() {
        if(! uuidValidate(this.id)) {
            throw new InvalidUuidError();
        }
    }



}