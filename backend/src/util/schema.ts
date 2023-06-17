import Ajv from "ajv";
const ajv = new Ajv();

export const validateSchema = (schema: any, data: any) => {
  const validate = ajv.compile(schema);
  return validate(data);
};
