<template>
  <div class="flex flex-col w-full">
    <h2>Главный администратор</h2>
    <role-permissions-container
      :permission-block-name="permissions.projects.name"
      :permission-block-description="permissions.projects.description"
    >
      <role-permissions-container-block>
        <v-select class="w-1/3 mr-12" label="Видимость проектов" />
        <v-select class="w-1/3 mr-12" label="Редактирование проектов" />
      </role-permissions-container-block>
      <role-permissions-container-block>
        <v-toggle
          class="w-1/3 mr-12"
          v-model="projectCreation"
          label="Создание новых проектов"
        />
        <v-toggle class="w-1/3 mr-12" />
      </role-permissions-container-block>
    </role-permissions-container>
    <role-permissions-container
      :permission-block-name="permissions.tasks.name"
      :permission-block-description="permissions.tasks.description"
    >
      <role-permissions-container-block>
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3" />
      </role-permissions-container-block>
      <role-permissions-container-block>
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3" />
      </role-permissions-container-block>
    </role-permissions-container>
    <role-permissions-container
      :permission-block-name="permissions.expenses.name"
      :permission-block-description="permissions.expenses.description"
    >
      <role-permissions-container-block>
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3" />
      </role-permissions-container-block>
      <role-permissions-container-block>
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3" />
      </role-permissions-container-block>
    </role-permissions-container>
    <role-permissions-container
      :permission-block-name="permissions.payments.name"
      :permission-block-description="permissions.payments.description"
    >
      <role-permissions-container-block>
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3" />
      </role-permissions-container-block>
      <role-permissions-container-block>
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3" />
      </role-permissions-container-block>
    </role-permissions-container>
    <role-permissions-container
      :permission-block-name="permissions.clients.name"
      :permission-block-description="permissions.clients.description"
    >
      <role-permissions-container-block>
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3" />
      </role-permissions-container-block>
      <role-permissions-container-block>
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3" />
      </role-permissions-container-block>
    </role-permissions-container>
    <role-permissions-container
      :permission-block-name="permissions.administration.name"
      :permission-block-description="permissions.administration.description"
    >
      <role-permissions-container-block>
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3 mr-12" />
        <v-select class="w-1/3" />
      </role-permissions-container-block>
      <role-permissions-container-block>
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3 mr-12" />
        <v-toggle class="w-1/3" />
      </role-permissions-container-block>
    </role-permissions-container>
  </div>
</template>

<script>
import RolePermissionsContainer from "../components/Role/RolePermissionsContainer.vue";
import RolePermissionsContainerBlock from "../components/Role/RolePermissionsContainerBlock.vue";
import VToggle from "../components/VToggle.vue";

export default {
  name: "ViewRole",
  components: {
    RolePermissionsContainer,
    RolePermissionsContainerBlock,
    VToggle,
  },
  data() {
    return {
      projectCreation: false,
      permissions: {
        projects: {
          name: "Проекты",
          description:
            "Видимость проектов, создание новых проектов, редактирование проектов, делегировать проект.",
        },
        tasks: {
          name: "Задачи",
          description:
            "Видимость задач в проектах, создание задач в проектах,  редактирование задач в проектах, делегирование задачи, настройка статусов задач, удаление задач.",
        },
        expenses: {
          name: "Трудозатраты",
          description:
            "Внесение трудозатрат по задаче, редактирование внесенных трудозатрат по задаче.",
        },
        payments: {
          name: "Платежи",
          description:
            "Внесение и редактирование платежей, внесение и редактирование расходов, внесение и редактирование дополнительных расходов.",
        },
        clients: {
          name: "Клиенты",
          description: "Создание и редактирование клиентов команды.",
        },
        administration: {
          name: "Администрирование команды",
          description:
            "Создание и редактирование ролей, назначение и изменение ролей пользователей, создание должностей, назначение и изменение должностей пользователей, редактирование структуры компании, добавление сотрудников в компанию, деактивация сотрудников",
        },
      },
    };
  },
  methods: {
    toggleValue(value) {
      this.projectCreation = value;
    },
  },
};
</script>

<style scoped></style>
