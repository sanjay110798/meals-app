document.addEventListener("DOMContentLoaded", function () {
    const mealNameInput = document.getElementById("mealName");
    const addMealButton = document.getElementById("addMeal");
    const searchQueryInput = document.getElementById("searchQuery");
    const mealList = document.getElementById("mealList");
  
    const meals = [];
  
    addMealButton.addEventListener("click", function () {
      const mealName = mealNameInput.value.trim();
  
      if (mealName !== "") {
        meals.push(mealName);
        mealNameInput.value = "";
        renderMeals();
      }
    });
  
    searchQueryInput.addEventListener("input", function () {
      const searchQuery = searchQueryInput.value.trim().toLowerCase();
      renderMeals(searchQuery);
    });
  
    function renderMeals(searchQuery = "") {
      mealList.innerHTML = "";
  
      meals.forEach((meal) => {
        if (searchQuery === "" || meal.toLowerCase().includes(searchQuery)) {
          const mealItem = document.createElement("div");
          mealItem.classList.add("meal");
          mealItem.textContent = meal;
          mealList.appendChild(mealItem);
        }
      });
    }
  });