import { IStringKeyMap } from "./utils";
import { requestUrl } from "obsidian";
import imageEnhancePlugin from "./main";

export class PicGoDeleter {
  plugin: imageEnhancePlugin;

  constructor(plugin: imageEnhancePlugin) {
    this.plugin = plugin;
  }

  async deleteImage(configMap: IStringKeyMap<any>[]) {
    const response = await requestUrl({
      url: this.plugin.settings.deleteServer,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        list: configMap,
      }),
    });
    const data = response.json;
    return data;
  }
}
