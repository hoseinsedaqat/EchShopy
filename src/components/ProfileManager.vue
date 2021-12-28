<template>
  <div class="profile-manager-content">
    <div class="user-profile-data">
      <div class="profile-personal-info">
        <h4>اطلاعات شخصی</h4>
        <div class="personal-table">
          <div>
            <span>نام و نام خانوادگی:</span>
            <p>{{ userInfo.name }}</p>
          </div>
          <div>
            <span>پست الکترونیک:</span>
            <p>{{ userInfo.email }}</p>
          </div>
          <div>
            <span>شماره تلفن همراه:</span>
            <p>09176484569</p>
          </div>
          <div>
            <span>کدملی:</span>
            <p>1234567890</p>
          </div>
          <div>
            <span>دریافت خبرنامه:</span>
            <p>خیر</p>
          </div>
          <div>
            <span>روش بازگشت وجه:</span>
            <p>-</p>
          </div>
          <div>
            <span>
              <i class="fas fa-pencil-alt"></i>
              ویرایش اطلاعات شخصی
            </span>
          </div>
        </div>
      </div>
      <div class="profile-favorite-list">
        <h4>لیست آخرین علاقه مندی ها</h4>
        <div class="favorite-list-body"></div>
        <div class="favorite-list-edit">
          <span>
            <i class="fas fa-pencil-alt"></i>
            مشاهده و ویرایش لیست مورد علاقه
          </span>
        </div>
      </div>
    </div>
    <div class="order-table">
      <table>
        <tr>
          <th>#</th>
          <th>شماره سفارش</th>
          <th>تاریخ ثبت سفارش</th>
          <th>مبلغ قابل پرداخت</th>
          <th>مبلغ کل</th>
          <th>عملیات پرداخت</th>
          <th>جزیئات</th>
        </tr>
        <tr>
          <td>1</td>
          <td>DKC-123456789</td>
          <td>۴ اردیبهشت ۱۴۰۰</td>
          <td>۰</td>
          <td>۸۳,۵۰۰ تومان</td>
          <td class="bad-payment">پرداخت ناموفق</td>
          <td><i class="fas fa-chevron-left icon-more-detail"></i></td>
        </tr>
        <tr>
          <td>2</td>
          <td>DKC-987654321</td>
          <td>۲۶ دی ۱۳۹۹</td>
          <td>۰</td>
          <td>۲۵۹,۹۸۰ تومان</td>
          <td class="ok-payment">پرداخت موفق</td>
          <td><i class="fas fa-chevron-left icon-more-detail"></i></td>
        </tr>
        <tr>
          <td>3</td>
          <td>DKC-135798642</td>
          <td>۱ آذر ۱۳۹۹</td>
          <td>۰</td>
          <td>۳۰,۵۹۹,۰۰۰ تومان</td>
          <td class="ok-payment">پرداخت موفق</td>
          <td><i class="fas fa-chevron-left icon-more-detail"></i></td>
        </tr>
        <tr>
          <td>4</td>
          <td>DKC-246813578</td>
          <td>۱۶ آبان ۱۳۹۹</td>
          <td>۰</td>
          <td>۳۱۰,۰۰۰ تومان</td>
          <td class="bad-payment">پرداخت ناموفق</td>
          <td><i class="fas fa-chevron-left icon-more-detail"></i></td>
        </tr>
        <tr>
          <td>5</td>
          <td>DKC-156784356</td>
          <td>۱۳ آبان ۱۳۹۹</td>
          <td>۰</td>
          <td>۵۹,۱۳۲,۰۰۰ تومان</td>
          <td class="ok-payment">پرداخت موفق</td>
          <td><i class="fas fa-chevron-left icon-more-detail"></i></td>
        </tr>
        <tr>
          <td>6</td>
          <td>DKC-135567849</td>
          <td>۱۳ آبان ۱۳۹۹</td>
          <td>۰</td>
          <td>۵۵,۶۱۹,۵۰۰ تومان</td>
          <td class="cancel-payment">لغو شده</td>
          <td><i class="fas fa-chevron-left icon-more-detail"></i></td>
        </tr>
      </table>
      <div class="table-footer">
        <p>مشاهده لیست سفارش ها</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserData } from "../utils/setUserData";
export default {
  name: "ProfileManager",
  data() {
    return {
      userInfo: getUserData(),
    };
  },
};
</script>
