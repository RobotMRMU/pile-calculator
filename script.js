// script.js - 全局脚本

// 导航栏切换
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

// 设置当前页面导航高亮
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 清除所有本地存储数据
function clearAllData() {
    if (confirm('确定要清除所有本地存储的计算历史和数据吗？')) {
        localStorage.clear();
        alert('所有数据已清除！');
        // 刷新页面以反映更改
        if (typeof renderHistory === 'function') {
            renderHistory();
        }
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    
    // 关闭移动端菜单当点击链接时
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('navMenu');
            if (menu && menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        });
    });
});
