// path: ./src/core/meta-manager.js
class MetaManager {
  updateMetaDescription(name) {
    const metaDescription = `Description for ${name}`;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.content = metaDescription;
    }
  }
}

export { MetaManager };
