import faker from 'faker'

export default class LocationSerializer {
    static serialize(location) {
        const address = faker.address;

        return {
            location_title: `${address.country()}, ${address.city()}, ${address.zipCode()}, ${address.cityName()}`,
            street_number: faker.datatype.number(),
            locality: address.city(),
            postal_code: address.zipCode(),
            latitude: location?.coords?.latitude?.toString(),
            longitude: location?.coords?.longitude?.toString(),
            place_id: address.streetPrefix(),
            country: address.country(),
            facility_name: address.secondaryAddress(),
        }
    }

    static deserialize(location) {

        return {
            ...location
        }
    }
}