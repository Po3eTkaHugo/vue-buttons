<template>
  <div class="small-card"><!--
    <div class="small-card__pic"></div>-->
    <div class="small-card__description">
      <div class="small-card__description__rating">
        <div class="small-card__description__rating__place">
          5.0
          <img
            src="../images/star.png"
            alt="star.png"
            class="small-card__description__rating__place__star">
        </div>
      </div>
      <div class="small-card__description__title">
        Alone with nature
      </div>
      <div class="small-card__description__price">
        <span class="small-card__description__price__count">$100</span>
        <span class="small-card__description__price__slash">/</span>
        <span class="small-card__description__price__person">person</span>
      </div>
      <div class="small-card__description__goto">
        <button class="small-card__description__goto__button">→</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallCard"
}

</script>

<style scoped lang="less">
.small-card {
  border: #f4f4f4 solid 2px;
  border-radius: 20px;
  width: 16vw;
  height: 50vh;
  padding: 20px;
//38vh pix height
  &__description {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template: 80% repeat(2, 10%) / 2fr 1fr;

    &__rating {
      grid-area: 1 / 2 / 2 / 3;
      border: #8C2B3D solid 1px;

      &__place {
        height: 40px;
        border-radius: 20px;
        background-color: #8C2B3D;
        backdrop-filter: blur(3px);
        color: #fff;
        padding: 5px 15px;
        font-weight: 300;
        display: flex;
        align-items: center;

        &__star {
          height: 70%;
          padding-left: 6px;
        }
      }
    }

    &__title {
      grid-area: 2 / 1 / 3 / 2;
      font-weight: 600;
      display: flex;
      align-items: end;
      font-size: 18px;
    }

    &__price {
      grid-area: 3 / 1 / 4 / 2;
      display: flex;
      align-items: end;
      font-size: 10px;
      line-height: 20px;

      &__count {
        font-weight: 700;
      }

      &__slash {
        font-weight: 200;
        font-size: 20px;
      }

      &__person {
        font-size: 12px;
      }
    }

    &__goto {
      grid-area: 2 / 2 / 4 / 3;
      display: flex;
      justify-content: end;
      align-items: end;

      &__button {
        border: none;
        background-color: #1a1e18;
        width: 5vh;
        height: 5vh;
        border-radius: 100%;
        color: #fff;
        font-size: 35px;
        font-weight: 200;

        &:hover {
          filter: brightness(200%);
        }
      }
    }
  }
}
</style>