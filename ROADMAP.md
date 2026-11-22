# رودمپ آزمایشگاه گرافیکی الگوریتم‌ها

## تصمیم فنی

هدف پروژه یک مرجع آموزشی دسکتاپ با گرافیک زنده، ورودی کاربر، مقایسه الگوریتم‌ها و خروجی قابل ارسال برای استاد است.

پیشنهاد اصلی:

- زبان: TypeScript
- رابط: React + Vite
- موتور دسکتاپ و خروجی نصبی: Tauri
- گرافیک عمومی و انیمیشن‌ها: PixiJS
- گراف‌های تعاملی و الگوریتم‌های شبکه: Cytoscape.js
- ذخیره تمرین‌ها و داده‌های کاربر: JSON محلی

## مدل اصلی برنامه

هر الگوریتم باید به شکل یک ماژول مستقل نوشته شود:

- شناسه الگوریتم
- دسته آموزشی
- توضیح کوتاه
- ورودی‌های قابل قبول
- داده نمونه آماده
- تولید داده تصادفی
- اعتبارسنجی ورودی کاربر
- تابع اجرا به صورت step-by-step
- وضعیت‌های تصویری هر قدم
- مرتبه زمانی
- مرتبه مکانی
- نکات آموزشی و خطاهای رایج

## ترتیب پیشنهادی محتوا

### 1. مبانی، آرایه و مرتب‌سازی

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Counting Sort در صورت نیاز
- Radix Sort در صورت نیاز

ورودی کاربر:

- لیست اعداد با جداکننده فاصله یا ویرگول
- تولید تصادفی
- داده تقریبا مرتب
- داده نزولی
- داده با مقدار تکراری

مقایسه:

- تعداد مقایسه
- تعداد جابه‌جایی یا نوشتن
- زمان واقعی اجرا
- پایداری الگوریتم
- in-place بودن

### 2. جست‌وجو

- Linear Search
- Binary Search
- Jump Search در صورت نیاز
- Interpolation Search در صورت نیاز

نکته آموزشی:

- Binary Search باید کنار پیش‌شرط مرتب بودن داده نمایش داده شود.
- برای مقایسه، یک داده مرتب و یک داده نامرتب نشان داده شود تا کاربر تفاوت پیش‌شرط را ببیند.

### 3. روابط بازگشتی

- Factorial
- Fibonacci ساده
- Fibonacci با memoization
- GCD / Euclid
- Tower of Hanoi
- پیمایش بازگشتی درخت

نمایش:

- درخت فراخوانی
- stack فراخوانی
- ورودی و خروجی هر frame
- تعداد فراخوانی‌ها

### 4. تقسیم و حل

- Binary Search
- پیدا کردن min و max با تقسیم و حل
- Merge Sort
- Quick Sort
- ضرب اعداد بزرگ
- Karatsuba
- ضرب سریع ماتریس‌ها
- زمان‌بندی تورنمنت ورزشی

مقایسه مهم:

- ضرب معمولی عدد بزرگ در برابر Karatsuba
- ضرب ماتریس معمولی در برابر روش سریع‌تر
- min/max خطی در برابر روش تقسیم و حل از نظر تعداد مقایسه

### 5. درخت‌ها و ساختمان داده‌های درختی

- Binary Tree
- Binary Search Tree
- Heap Tree
- Min Heap / Max Heap
- پیمایش‌ها: inorder, preorder, postorder, level-order
- درج، حذف و جست‌وجو در BST
- heapify و ساخت heap

ورودی کاربر:

- ساخت نود با کلیک یا دکمه افزودن
- drag-and-drop برای جابه‌جایی نود
- اتصال والد و فرزند
- وارد کردن مقدار نود

### 6. گراف‌ها و الگوریتم‌های گراف

- BFS
- DFS
- Dijkstra
- Bellman-Ford
- Kruskal
- Prim
- Minimum Spanning Tree
- Hamiltonian Cycle
- زمان‌بندی فرآیندهای دارای ضرب‌الاجل، اگر به صورت مدل گراف یا greedy نمایش داده شود

ورودی کاربر:

- افزودن نود
- drag-and-drop نودها
- اتصال دو نود با کشیدن یال
- تعیین وزن یال
- انتخاب جهت‌دار یا بدون‌جهت بودن گراف
- انتخاب مبدا و مقصد
- تشخیص یال منفی و هشدار برای Dijkstra

### 7. برنامه‌سازی پویا

- Matrix Chain Multiplication
- Bellman-Ford برای کوتاه‌ترین مسیر با وزن منفی و بدون دور منفی
- 0/1 Knapsack
- Fractional Knapsack فقط برای مقایسه با greedy
- Unbounded Knapsack
- Longest Common Subsequence
- Longest Increasing Subsequence
- بیشترین مجموع در مسیر یک درخت، اگر به فرم DP روی درخت مدل شود

نمایش:

- جدول DP
- مسیر بازسازی جواب
- سلول فعال
- رابطه بازگشتی هر سلول

### 8. حریصانه

- Activity Selection
- Fractional Knapsack
- Dijkstra برای گراف با یال نامنفی
- Job Sequencing with Deadlines
- Huffman Coding در صورت اضافه شدن
- انتخاب k شی از n شی بدون ترتیب، اگر هدف تولید ترکیب‌ها باشد بهتر است در backtracking هم نمایش داده شود

مقایسه مهم:

- Dijkstra در برابر Bellman-Ford
- Fractional Knapsack در برابر 0/1 Knapsack
- Activity Selection greedy در برابر brute force

### 9. بازگشت به عقب

- N-Queen
- Subset Sum
- Hamiltonian Cycle
- تولید ترکیب‌ها: انتخاب k از n
- TSP به روش backtracking

نمایش:

- درخت تصمیم
- مسیرهای حذف‌شده
- شرط رد شدن شاخه
- جواب‌های پیدا شده

### 10. انشعاب و تحدید

- TSP با Branch and Bound
- 0/1 Knapsack با Branch and Bound
- Assignment Problem در صورت نیاز

مقایسه مهم:

- TSP brute force
- TSP backtracking
- TSP branch and bound
- TSP greedy approximation

### 11. تحلیل سرشکن‌شده

- Binary Counter ساده
- k-bit Binary Counter
- روش حسابداری
- روش پتانسیل در صورت نیاز
- dynamic array resizing در صورت اضافه شدن ساختمان داده‌ها

نمایش:

- هزینه واقعی هر عملیات
- هزینه سرشکن‌شده
- موجودی حسابداری یا پتانسیل
- نمودار تجمعی هزینه

## صفحه‌های مقایسه ضروری

### کوتاه‌ترین مسیر

- Dijkstra
- Bellman-Ford
- BFS برای گراف بدون وزن

مقایسه بر اساس:

- اجازه وزن منفی
- تشخیص دور منفی
- سرعت
- تعداد relaxation
- پیش‌شرط‌ها

### فروشنده دوره‌گرد

- brute force
- backtracking
- branch and bound
- greedy nearest neighbor
- dynamic programming / Held-Karp در فاز پیشرفته

### کوله‌پشتی

- 0/1 DP
- Unbounded DP
- Fractional greedy
- Branch and Bound

### دور همیلتونی

- backtracking
- brute force
- branch and bound در صورت نیاز

## پیشنهاد UX برای گراف و درخت

تعامل پیشنهادی:

- کلیک روی فضای خالی: افزودن نود
- drag: جابه‌جایی نود
- double click روی نود: شروع اتصال
- کشیدن به نود دیگر: ساخت یال
- پنجره کوچک بعد از ساخت یال: وزن، جهت‌دار بودن، رنگ یا برچسب
- کلیک روی یال: ویرایش وزن
- Delete: حذف نود یا یال انتخاب‌شده
- Ctrl+Z / Ctrl+Y: undo و redo
- دکمه Auto Layout برای مرتب‌سازی خودکار گراف
- دکمه Validate برای هشدارهایی مثل وزن منفی، گراف disconnected یا نبود مبدا

## فازبندی ساخت

### فاز 1

- تبدیل پروژه به Vite + TypeScript
- طراحی shell اصلی برنامه
- موتور step-by-step مشترک
- مرتب‌سازی‌ها
- ورودی لیست اعداد
- مقایسه زنده مرتب‌سازی‌ها

### فاز 2

- گراف ادیتور drag-and-drop
- BFS / DFS / Dijkstra / Bellman-Ford
- ذخیره و بارگذاری گراف‌ها

### فاز 3

- DP visualizer
- کوله‌پشتی
- matrix chain
- LCS / LIS

### فاز 4

- backtracking
- N-Queen
- subset sum
- Hamiltonian cycle
- TSP comparison

### فاز 5

- Tauri
- ساخت installer ویندوز
- polish گرافیکی
- حالت ارائه برای استاد
