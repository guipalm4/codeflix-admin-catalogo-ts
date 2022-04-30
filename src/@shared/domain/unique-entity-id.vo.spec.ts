import {UniqueEntityId} from "./unique-entity-id.vo";
import InvalidUuidError from "../errors/invalid-uuid-error";
import { validate as uuidValidate } from "uuid";

describe('UniqueEntityId Unit Test', () => {
    const spy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
    it('should throw Error when calling from with invalid uuid', () =>{
        expect(()=> UniqueEntityId.from('fake id')).toThrow(new InvalidUuidError())
        expect(spy).toHaveBeenCalled();
    });
    it('should create a UniqueEntityId when calling create', () =>{
        const id = UniqueEntityId.create();
        expect(()=> UniqueEntityId.create()).not.toThrow(new InvalidUuidError())
        expect(id).not.toBeNull()
        expect(spy).toHaveBeenCalled();
    });
    it('should create a UniqueEntityId when calling from with valid uuid', () =>{
        const aID = "7a2c2389-7a77-4e34-a55a-d2d671d14630";

        const uniqueId = UniqueEntityId.from(aID);

        expect(()=> UniqueEntityId.from(aID)).not.toThrow(new InvalidUuidError())
        expect(uniqueId).not.toBeNull()
        expect(uuidValidate(uniqueId.id)).toBeTruthy()
        expect(uniqueId.id).toBe(aID)
        expect(spy).toHaveBeenCalled();
    });
});