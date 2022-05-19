import supertest from "supertest";
import app from "../index.js"

const request = supertest(app)

describe("Getting pets from theAPI", () => {
    it("should return all the pets I loved before", async () =>{
        // arrange
        const endpoint = "/pets",
        expectedResponse = "All the pets I loved before"

        // atc
        const actual = await request.get(endpoint)

        // assert
        expect(actual.text).toBe(expectedResponse)
    })
})