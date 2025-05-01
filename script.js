<script>
  document.querySelectorAll('.nav-btn').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
      link.classList.add('active');
    });
  });
</script>
