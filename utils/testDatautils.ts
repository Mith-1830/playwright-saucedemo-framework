export function generateRandomEmail() : string {

    const randomnumber = Math.floor(Math.random() * 100000);

    return`testuser${randomnumber}@gmail.com`;
}