const newman = require("newman")

newman.run({
    collection: "json-collection/Nuning.postman_collection.json",
    environment: "json-environment/Nuning.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
