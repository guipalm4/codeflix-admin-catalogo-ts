import { Category } from './category';

describe("Category Tests", () => {
    test("Constructor of Category", () => {
        const category : Category = new Category('Movie');
        expect(category.name).toBe('Movie')
    })
});