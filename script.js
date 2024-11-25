
class Smoothie {
    constructor(fruit, base, size, toppings) {
        this.fruit = fruit;
        this.base = base;
        this.size = size;
        this.toppings = toppings;
    }

    getDescription() {
        return `Your ${this.size} smoothie with ${this.fruit} and ${this.base}, topped with ${this.toppings.join(', ')}.`;
    }
}

document.getElementById('orderButton').addEventListener('click', () => {
    const fruit = document.getElementById('fruit').value;
    const base = document.getElementById('base').value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(t => t.value);

    const smoothie = new Smoothie(fruit, base, size, toppings);
    document.getElementById('orderSummary').textContent = smoothie.getDescription();
});
