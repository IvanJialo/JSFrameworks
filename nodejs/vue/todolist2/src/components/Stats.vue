<template>
    <div class="tasks-summary">
      <div class="task-box today">
        <span class="emoji">{{ taskEmojis.today }}</span>
        <div class="task-content">
          <h3>Today</h3>
          <p class="count">{{ taskData.today }}</p>
        </div>
      </div>
  
      <div class="task-box scheduled">
        <span class="emoji">{{ taskEmojis.scheduled }}</span>
        <div class="task-content">
          <h3>Scheduled</h3>
          <p class="count">{{ taskData.scheduled }}</p>
        </div>
      </div>
  
      <div class="task-box all">
        <span class="emoji">{{ taskEmojis.all }}</span>
        <div class="task-content">
          <h3>All</h3>
          <p class="count">{{ taskData.all }}</p>
        </div>
      </div>
  
      <div class="task-box overdue">
        <span class="emoji">{{ taskEmojis.overdue }}</span>
        <div class="task-content">
          <h3>Overdue</h3>
          <p class="count">{{ taskData.overdue }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Stats',
    data() {
      return {
        taskData: {
          today: 6,
          scheduled: 5,
          all: 14,
          overdue: 3,
        },
        taskEmojis: {
          today: '📅',
          scheduled: '⏳',
          all: '📋',
          overdue: '⚠️',
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .tasks-summary {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-between;
  }
  
  .task-box {
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    width: 23%;
    height: 120px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px;
    color: #333;
  }
  
  .emoji {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 20px;
  }
  
  .task-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  
  h3 {
    font-size: 16px;
    margin: 0;
  }
  
  .count {
    font-size: 20px;
    font-weight: bold;
  }
  
  .today {
    background-color: #a6e1fa;
  }
  
  .scheduled {
    background-color: #ffecb3;
  }
  
  .all {
    background-color: #c7f8c8;
  }
  
  .overdue {
    background-color: #ffcccc;
  }
  </style>
  