<script lang="ts">
    

    export let data
</script>

<h2>Time Entries</h2>

{#if data} 
<pre>
    {JSON.stringify(data, null, 2)}
</pre>
{/if}