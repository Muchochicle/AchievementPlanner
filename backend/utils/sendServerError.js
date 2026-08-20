// Generic, safe 500 response for genuinely unexpected errors. The real
// error (full message, stack included) is logged server-side for
// diagnosis; the client only ever sees this fixed, non-revealing message -
// never error.message, which could otherwise leak internal implementation
// details for whatever exception happens to occur. Deliberate 4xx
// rejections (invalid input, failed auth, not found, unknown category,
// etc.) are untouched by this - those already return safe, intentional
// messages of their own and must keep doing so.
const GENERIC_MESSAGE = "Something went wrong. Please try again later.";

export function sendServerError(res, error, context) {

    console.error(`[${context}]`, error);

    res.status(500).json({

        success: false,

        message: GENERIC_MESSAGE

    });

}
