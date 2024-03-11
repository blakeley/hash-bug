import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";

export const useUrlHash = routeLoader$((requestEvent) => {
  console.log(requestEvent.url)

  return requestEvent.url.hash
})

export default component$(() => {
  const urlHash = useUrlHash()

  return (
      <div class="container container-center container-spacing-xl">
        <h3>
          {urlHash.value}
        </h3>

        <Link id="new-fragment-identifer" href="#new-fragment-identifier">
          New Fragment Identifier
        </Link>
        
        <br />

        <Link id="hash" href="#hash">
          Hash
        </Link>
      </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
