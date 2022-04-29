import { Category } from './category';

describe("Category Tests", () => {
    test("Constructor of Category", () => {
        // Triple AAA - Arrange Act Assert

        // Arrange
        const props = {
            name: "Movie",
            description: "some description",
            is_active: true,
            created_at: new Date,
        };

        // Act
        const category : Category = new Category(props);

        // Assert
        expect(category.props).toStrictEqual(props);
    })
});