import Joi from 'joi';
export default eventHandler(
  defineEventHandler(async (event) => {
    const query = getQuery(event);
    const { error } = Joi.object({
      email: Joi.string().required().email(),
    })
      .prefs({ errors: { label: 'key' } })
      .validate(query, {
        abortEarly: false,
      });

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(', ');
      throw createError({
        statusCode: 400,
        statusMessage: errorMessage,
      });
    }
    return { 1: 1 };
  })
);
