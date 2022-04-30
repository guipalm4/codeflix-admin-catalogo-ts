import { Category } from './category';
import { omit } from "lodash";

describe("Category Tests", () => {
    describe("Category Constructor", () => {
        test("Constructor of Category with full props", () => {
            // Triple AAA - Arrange Act Assert

            // Arrange
            const props = {
                name: "Movie",
                description: "some description",
                is_active: true,
                created_at: new Date,
            };

            // Act
            const category: Category = new Category(props);

            // Assert
            expect(category.props).toStrictEqual(props);
        })
        test("Constructor of Category with just name", () => {

            const props = {
                name: "Movie"
            };
            const category: Category = new Category(props);
            const actual = omit(category.props, "created_at")


            expect(actual).toStrictEqual({
                name: "Movie",
                is_active: true,
                description: null,
            });
            expect(category.props.created_at).toBeInstanceOf(Date);
        })
        test("Constructor of Category with description and is_active", () => {

            let created_at = new Date();
            const props = {
                name: "Movie",
                description: "some description",
                is_active: false,
            };
            const category: Category = new Category(props);
            expect(category.props).toStrictEqual({
                name: "Movie",
                is_active: false,
                description: "some description",
                created_at
            });
        })
        test("Constructor of Category with name and created_at", () => {

            let created_at = new Date();
            const props = {
                name: "Movie",
                created_at
            };
            const category: Category = new Category(props);
            expect(category.props).toMatchObject({
                name: "Movie",
                is_active: true,
                created_at
            });
        })
        test("Constructor of Category with name and is_active", () => {

            let created_at = new Date();
            const props = {
                name: "Movie",
                is_active: false,
            };
            const category: Category = new Category(props);
            expect(category.props).toMatchObject({
                name: "Movie",
                is_active: false,
            });
        })
    })
    describe("Getters And Setters", () => {
        test("Getter of name field", () => {
            const category = new Category({name: "Movie"})
            expect(category.name).toBe("Movie");
        })
        test("Getter and Setter of description field", () => {
            let category = new Category({name: "Movie"});
            expect(category.description).toBeNull();

            category = new Category({name: "Movie", description: "some description"});
            expect(category.description).toBe("some description")

            category ["description"]= "other description";
            expect(category.description).toBe("other description");

            category ["description"]= undefined
            expect(category.description).toBeNull();

            category ["description"]= null;
            expect(category.description).toBeNull();

        })
        test("Getter and Setter of is_active field", () => {
            let category = new Category({name: "Movie"});
            expect(category.is_active).toBeTruthy()

            category = new Category({name: "Movie", is_active: false});
            expect(category.is_active).toBeFalsy()

            category = new Category({name: "Movie", is_active: true});
            expect(category.is_active).toBeTruthy()

            category ["is_active"]= undefined
            expect(category.is_active).toBeNull();

            category ["is_active"]= null;
            expect(category.description).toBeNull();

        })
        test("Getter of created_at field", () => {
            let created_at = new Date();
            let category = new Category({name: "Movie", created_at})
            expect(category.created_at).toBe(created_at);
        })
    })
});
