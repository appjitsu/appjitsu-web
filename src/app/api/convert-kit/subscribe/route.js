export async function POST(req) {
  try {
    const { formId, email } = await req.json();
    const url = [
      "https://api.convertkit.com/v3",
      `forms`,
      formId,
      "subscribe",
    ].join("/");
    console.log("url", url);
    console.log("email", email);
    console.log("formId", formId);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        api_secret: process.env.CONVERTKIT_API_SECRET,
        email,
      }),
    }).then((res) => res.json());

    console.log("res", res);

    if (res.error) {
      throw new Error(
        `Error subscribing ${email} to ConvertKit form ${formId}`
      );
    }
    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
