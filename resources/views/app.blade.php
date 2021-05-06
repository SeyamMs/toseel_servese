<!DOCTYPE html>
<html dir="rtl" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- SEO -->
    <meta name="description" content="">
    <meta name="keywords" content="تحميل و تنزيل البضائع، نقل الحيوانات ، نقل الحيوانات الاليفة، نقل الطيور، نقل وتوصيل الأعلاف، نقل وتوصيل لأعبلف الحيوانات، نقل الاثاث المنزلي وتحميله وتنزيله، عمال  فك وتركيب،,Loading and unloading of goods, Animal transport, Pet transport, Bird transport, Feed transport and delivery, Transport and delivery of animal feed, Moving, loading and downloading home furniture, Decoding and installing workers">
    <meta name="author" content="THANKYOUPLATFO">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/app.js') }}" defer></script>
    <script src="{{ mix('js/manifest.js') }}" defer></script>
</head>

<body class="font-sans">
    @inertia
    <div id="modals"></div>
</body>

</html>