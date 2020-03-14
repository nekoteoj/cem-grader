<script>
    import MatrixDisplay from './MatrixDisplay.svelte';
    import Fraction from '../model/fraction';
    import Matrix from '../model/matrix';
    
    let queries = '';
    let numberOfRow = '4';
    let numberOfColumn = '4';
    let matrix = new Matrix(Number(numberOfRow), Number(numberOfColumn));
    let memory = {
        queries,
        numberOfRow,
        numberOfColumn,
        matrix
    };

    function onInitializeMatrix(event) {
        matrix = new Matrix(Number(numberOfRow), Number(numberOfColumn));
    }

    function onUpdateMatrixEntry(event) {
        const { row, col, fractionString } = event.detail;
        const fraction = Fraction.fromString(fractionString);
        matrix = matrix.setEntry(row, col, fraction);
    }

    function onExecuteQuery(event) {
        matrix = matrix.execute(queries.split('\n'));
    }

    function onSave() {
        memory = {
            queries,
            numberOfRow,
            numberOfColumn,
            matrix
        };
    }

    function onLoadSave() {
        ({ queries, numberOfRow, numberOfColumn, matrix } = memory);
    }
</script>

<style>
    .container-fluid {
        padding: 12px;
    }

    .mono-font {
        font-family: monospace;
        font-size: 16px;
    }

    textarea {
        width: 100%;
    }

    button {
        margin-bottom: 12px;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-8">
            <MatrixDisplay matrix={matrix} on:update={onUpdateMatrixEntry} />
        </div>
        <div class="col-12 col-md-4">
            <div class="row">
                <div class="input-group mb-3 col-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">#Row</span>
                    </div>
                    <input type="text" class="form-control" bind:value={numberOfRow}>
                </div>
                <div class="input-group mb-3 col-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">#Column</span>
                    </div>
                    <input type="text" class="form-control" bind:value={numberOfColumn}>
                </div>
                <div class="col-12">
                    <button class="col-12 btn btn-success" on:click={onInitializeMatrix}>
                        Initialize Matrix
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button class="col-12 btn btn-sm btn-dark" on:click={onSave}>
                        Save
                    </button>
                </div>
                <div class="col-6">
                    <button class="col-12 btn btn-sm btn-dark" on:click={onLoadSave}>
                        Load Saved
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h5>Query</h5>
                    <textarea name="query" id="query" rows="5" bind:value={queries}></textarea>
                </div>
                <div class="col-12">
                    <button class="col-12 btn btn-primary" on:click={onExecuteQuery}>
                        Execute
                    </button>
                </div>
                <div class="col-12">
                    <h5>Query instruction set</h5>
                    <ul class="mono-font">
                        <li>"MUL k,r": k*Rr -&gt; Rr</li>
                        <li>"SWP r,s": Rr &lt;-&gt; Rs</li>
                        <li>"AMR k,r,s": k*Rr + Rs -&gt; Rs</li>
                    </ul>
                    * Each query is separated by newlines.
                </div>
            </div>
        </div>
    </div>
</div>