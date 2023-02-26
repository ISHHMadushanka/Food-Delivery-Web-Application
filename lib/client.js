import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "bc0w7ns9",
    dataset: "production",
    apiVersion: "2023-02-26",
    useCdn: true,
    token: "skocXnK6M0aklLu440KyrCXoRV302c6bqXStBVzl0t4V1Glxjnm6ItcYkaqQgxECCjf2ulURsFNBWL3J1z2hEH7sUtlqoUQoY1acN2E4eJWMlaNfGrzG1D8YqwpX4XEJHmQ38gQo4gK95OgAbnKwy8YRCjiEas218b5e4M0g2uywIaoRQrYe"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)