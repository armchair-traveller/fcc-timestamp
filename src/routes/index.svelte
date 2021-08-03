<script>
  const apiOrigin = "alpha.fangdev.workers.dev/fcc/ts-ms";
</script>

<div
  class="min-w-screen min-h-screen grid place-items-center bg-[#101030] text-white"
>
  <section class="w-10/12 max-w-prose">
    <h1 class="font-extrabold text-2xl">Timestamp Microservice</h1>
    <p class="ml-4">
      by <span
        class="text-[#FFE193] font-medium hover:font-bold focus:font-bold"
        ><a href="https://github.com/armchair-traveller">Fang</a>🦁</span
      >
    </p>
    <div class="mt-3 font-medium">
      <p>Example Usage</p>
      <div class="text-[#A1B8F3] ml-4">
        <a
          href="https://{apiOrigin}/2015-12-25"
          class="hover:font-bold focus:font-bold">{apiOrigin}/2015-12-25</a
        >
        <a
          href="https://{apiOrigin}/1451001600000"
          class="hover:font-bold focus:font-bold">{apiOrigin}/1451001600000</a
        >
      </div>
    </div>
    <div class="mt-3 font-medium">
      <p class="">Example Output</p>
      <div class="ml-4 text-gray-300">
        <code
          >{`{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`}</code
        >
      </div>
    </div>
  </section>
</div>
