import faker from 'faker'

export default class LocationSerializer {
    static serialize(coords) {
        const address = faker.address;

        return {
            location_title: `${address.country()}, ${address.city()}, ${address.zipCode()}, ${address.cityName()}`,
            street_number: faker.datatype.number(),
            locality: address.city(),
            postal_code: address.zipCode(),
            latitude: coords.latitude?.toString(),
            longitude: coords.longitude?.toString(),
            place_id: address.streetPrefix(),
            country: address.country(),
            facility_name: address.secondaryAddress(),
        }
    }

    static deserialize(data) {
        if (Array.isArray(data)) {
            return data.map(({ attributes }) => ({
                ...attributes,
                latitude: Number(attributes?.latitude),
                longitude: Number(attributes?.longitude),
                latlng: {
                    latitude: Number(attributes?.latitude),
                    longitude: Number(attributes?.longitude),
                },
            }))
        }

        return {
            ...data.attributes,
            latitude: Number(data.attributes?.latitude),
            longitude: Number(data.attributes?.longitude),
            latlng: {
                latitude: Number(data.attributes?.latitude),
                longitude: Number(data.attributes?.longitude),
            },
        }
    }
}