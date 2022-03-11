<script>

</script>

<template>
    <div class="errorContainer">
        <h3 class="error404">This page does not exist :(</h3>
        
        <router-link to="/">
            <button class="buttonBackHome">Back to Home</button>
        </router-link>

    </div>
    
</template>

<style scoped>

.errorContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.error404{
    font-family: 'Lora', serif;
    font-size: 30px;
    font-weight: 700;
}

.buttonBackHome{
    background: black;
    color: yellow;
    font-family: 'Lora', serif;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    margin-top: 30px;
    cursor: pointer;
}
</style>
