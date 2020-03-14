<script>
    import { createEventDispatcher } from 'svelte';

    export let matrix;

    const dispatch = createEventDispatcher();

    function updateEntry(row, col, fractionString) {
        dispatch('update', { row, col, fractionString });
    }
</script>

<style>
    input {
        /* max-width: 120px; */
        width: 100%;
        margin: 0;
        padding: 4px;
        box-sizing: border-box;
    }
</style>

<table class="table table-bordered">
    <tbody>
        {#each matrix.data as row, i}
            <tr>
                {#each row as entry, j}
                    <td>
                        <input value={entry.toString()} on:change={event => updateEntry(i + 1, j + 1, event.target.value)} />
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>