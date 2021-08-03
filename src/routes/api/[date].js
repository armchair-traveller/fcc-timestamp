/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params: { date } }) {
  const resp = await fetch(
    `https://alpha.fangdev.workers.dev/fcc/ts-ms/${date}`,
    {
      method: "GET",
    }
  );

  return {
    body: JSON.stringify(await resp.json()),
  };
}
