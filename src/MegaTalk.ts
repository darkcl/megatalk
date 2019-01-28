import {
  QhunAddon,
  bootstrapAddon
} from "@wartoshika/wow-qhun-core-ts/src/core";

@QhunAddon()
class MyCoolAddon {
  constructor() {
    print("Hello World of Warcraft", "This is my Typescript addon!");
  }
}

bootstrapAddon(MyCoolAddon);
