class CP {
  extract<T>(inClass: T) {
    return Object.getOwnPropertyNames(inClass);
  }

  extractPrismaSelectFields<T>(inClass: T) {
    return Object.getOwnPropertyNames(inClass).reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {} as Record<string, true>);
  }
}

const ClassProperties = new CP();

export { ClassProperties };
